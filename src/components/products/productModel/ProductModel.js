import Modal from '@material-ui/core/Modal';

const ProductModel=({open,handleClose,body})=>{

    return(<>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
           >
            {body}
          </Modal>
           </>
           )
}

export default ProductModel;