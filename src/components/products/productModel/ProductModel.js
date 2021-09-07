import Modal from '@material-ui/core/Modal';

const ProductModel=({open,handleClose})=>{
    
    let body=<Book />;
    console.log(open);

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