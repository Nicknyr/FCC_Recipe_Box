import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';


const ModalComponent = (props) => {
  return (
    <Modal show={props.showRecipeForm} onHide={props.closeRecipeForm}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Recipe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
        
        <Button className="submit-button" onClick={props.onSubmit}>Submit</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button className="close-button" onClick={props.closeRecipeForm}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
