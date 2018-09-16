import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';


const EditModalComponent = (props) => {
  return (
    <Modal show={props.showRecipeEditForm} onHide={props.closeRecipeForm}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Recipe</Modal.Title>
      </Modal.Header>
      <Modal.Body>

         <label>Recipe Name</label>
          <input
            name="inputValEdit"
            value={props.inputValEdit}
            onChange={props.handleChange}
          />

          <label>Ingredients</label>

            <input
              name="ingredientValEdit"
              value={props.ingredientValEdit}
              onChange={props.handleChange}
              required
            />

          <Button className="submit-button" onClick={props.onEditSubmit}>Submit</Button>


      </Modal.Body>
      <Modal.Footer>
        <Button className="close-button" onClick={props.closeRecipeForm}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModalComponent;
