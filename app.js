var app = angular.module('crudApp', []);

app.controller('CrudController', [function () {
    var ctrl = this;
    ctrl.items = []; // Holds the list of items
    ctrl.newItem = {}; // The new item to be added
    ctrl.isEditing = false;
    ctrl.editIndex = -1;

    ctrl.addItem = function () {
        if (!ctrl.newItem.name || !ctrl.newItem.designation || !ctrl.newItem.salary) {
            alert("All fields are required!");
            return;
        }
        if (ctrl.isEditing) {
            ctrl.items[ctrl.editIndex] = angular.copy(ctrl.newItem);
            ctrl.isEditing = false;
        } else {
            ctrl.items.push(angular.copy(ctrl.newItem));
        }
        ctrl.resetForm(); // Clear the form after adding or updating item
    };

    ctrl.editItem = function (index) {
        ctrl.newItem = angular.copy(ctrl.items[index]);
        ctrl.isEditing = true;
        ctrl.editIndex = index;
    };

    ctrl.deleteItem = function (index) {
        ctrl.items.splice(index, 1); // Remove the item
        if (ctrl.isEditing && ctrl.editIndex === index) {
            ctrl.resetForm();
        }
    };

    ctrl.resetForm = function () {
        ctrl.newItem = {}; // Clear the form
        ctrl.isEditing = false;
        ctrl.editIndex = -1;
    };
}]);
