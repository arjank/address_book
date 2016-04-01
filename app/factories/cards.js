/**
 * Cards is a service that handles everything there is about address book cards
 *
 * If the cards are to be stored on the server rather than on the client,
 * only this service needs to be replaced with one that does the actual
 * communication with the server.
 */
addressBook.factory('cards', ['$localStorage', function($localStorage) {

    let storage = $localStorage.$default({
        cards: [
            {
                id: 1,
                firstName: 'Arjan',
                lastName: 'Kleene',
                email: 'example@example.com',
                country: 'Netherlands'
            }
        ],
        maxId: 1
    });

    /**
     * A helper function to find the index in the array for the given card id
     *
     * Returns the index, or null if the id is not found in the array.
     *
     * @param id
     * @returns {int|null}
     * @access private
     */
    function getIndexForId(id) {
        let i = 0,
            found = false;

        for (let card of storage.cards) {
            if (card.id == id) {
                found = true;
                break;
            } else {
                i++;
            }
        }

        return found ? i : null;
    }

    /**
     * Return all cards
     *
     * @returns {Array}
     */
    function getAll() {
        return storage.cards;
    }

    /**
     * Return the card with the given id, or null if no such card exists.
     *
     * @param id
     * @returns {*}
     */
    function getById(id) {
        let result = null;
        let index = getIndexForId(id);

        if (index !== null) {
            result = storage.cards[index];
        }

        return result;
    }

    /**
     * Add the card to the list
     *
     * @param card
     */
    function add(card) {
        card.id = ++storage.maxId;
        storage.cards.push(card);
    }

    /**
     * Update the card with the given id to the new card
     *
     * @param card
     */
    function update(card) {
        let index = getIndexForId(card.id);

        if (index === null) {
            throw 'Cannot update, card not found';
        } else {
            let begin = storage.cards.slice(0, index),
                end = storage.cards.slice(index + 1);

            begin.push(angular.copy(card));
            storage.cards = begin.concat(end);
        }
    }

    /**
     * Remove the card with the specified id, if that exists.
     *
     * Does nothing if the id is not found.
     *
     * @param id
     */
    function remove(id) {
        let index = getIndexForId(id);

        if (index !== null) {
            storage.cards.splice(index, 1);
        }
    }

    // Return all public functions
    return {
        getAll,
        getById,
        add,
        update,
        remove
    };
}]);
