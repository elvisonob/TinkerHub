/* Challenge 3: Create your own component

Create a Modal component that:

wraps children inside .modal-box

adds a dark background .modal-bg

Expected usage:

<Modal>
  <h3>Are you sure?</h3>
  <button>Yes</button>
</Modal>

*/
export default function App(){
  return (
    <Modal className="modal-box"></Modal>
  )
}

export default function styleComponent(props){
  return (
    <Modal>
      {props.children}
    </Modal>
  )
}
