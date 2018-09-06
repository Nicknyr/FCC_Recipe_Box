import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';


const RecipeForm = (props) => {
  return (
    <div>
    {/*  <form className="Recipe-Form" onSubmit={props.onSubmit}>
        <p className="x-close" onClick={props.closeRecipeForm}>X</p>
        <div className="form-content">
          <label>Recipe Name</label>

          <input
            name="inputVal"
            value={props.inputVal}
            onChange={props.handleChange}
          />

          <label>Ingredients</label>
          <input
            name="ingredientVal"
            value={props.ingredientVal}
            onChange={props.handleChange}
          />

          <button>Submit</button>
        </div>
      </form> */}
      <Modal show={props.showRecipeForm} onHide={props.closeRecipeForm}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Text in a modal</h4>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default RecipeForm;
