import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        fetch("https://protected-lowlands-25877.herokuapp.com/addProduct", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            alert("product added successfully!!");
            reset();
          });
      };
      return (
        <div>
          <Container>
            <div className="row w-50 mx-auto">
              <h3 className="">Add Product</h3>
              <br />

              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label>Product Name</label>
                    <input 
                      type="name"
                      className="form-control"
                      placeholder="Your Name"
                      {...register("productName", {required:true})}
                    />
                    {errors.exampleRequired && <span>This field is required</span>}
                  </div>
                  <div className="form-group">
                    <label>Price</label>
                    <input 
                      type="number"
                      className="form-control"
                      placeholder=""
                      {...register("price", {required:true})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Image</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="image bb link"
                      {...register("img", {required:true})}
                    />
                  </div>
                  <div className="form-group">
                    <p>Description</p>
                    <textarea 
                      class="form-control"
                      rows="3"
                      {...register("description", {required:true})}
                    ></textarea>
                  </div>
                  <input
                    className="btn btn-outline-dark my-3"
                    type="submit"
                    value="Add Product"
                  />
                </form>
              </div>
            </div>
          </Container>
        </div>
      );
    
};

export default AddProduct;