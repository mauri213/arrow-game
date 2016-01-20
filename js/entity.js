// This is an object constructor. Calling this function with the `new` keyword
// will create a new instance of Entity with the properties view and
// rigidBody.
//
// eg.
//      var entity = new Entity();
// 
// When creating entities, we should pass an instance of View and an instance
// of RigidBody.
//
// eg.
//      var entity = new Entity(new View(), new RigidBody());

var Entity = function (view, rigidBody) {
    this.view = view;
    this.rigidBody = rigidBody;
};