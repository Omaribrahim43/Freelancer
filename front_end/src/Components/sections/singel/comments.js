import axios from "../../../axios/axios";
import { loginSuccess } from "../../../redux/action";
import { Form, useParams } from "react-router-dom";
import  { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Dropdown } from "react-bootstrap";
import Swal from "sweetalert2";
// import EditForm from "./editform";
import * as React from "react";
import { useDispatch } from "react-redux";
import NewForm from './newform';
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};
function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}
export default function Comments() {

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update the current date and time every minute
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000); // 60000 milliseconds = 1 minute

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentDateTime.toISOString().slice(0, 16);

   const [value, setValue] = React.useState(2);
   const [hover, setHover] = React.useState(-1);
   let userlogin = useSelector((state) => state.user);
  //  if (!userlogin) {
  //   userlogin = { id: "1", image: "dd", name: "d", role:'ff'};
  //  }
  

  // console.log("userlogin", userlogin);
  const { id } = useParams();
  const [isloading, setisloading] = useState(true);
  const [freelancer, setfreelancer] = useState({});
  const [Project, setProject] = useState({});
  const [singlecomment, setsinglecomment] = useState({});
    const [UpdateComment, setUpdateComment] = useState({
      user_id: id,
      project_id: "",
      rating: 2,
      review_date: formattedTime,
      comment: "",
    });
const dispatch = useDispatch();

  // const [UpdateComment, setUpdateComment] = useState('');
     const [NewComment, setNewComment] = useState({
       user_id: userlogin.id,
       project_id: id,
       rating: 2,
       review_date: formattedTime,
       comment:"",
     });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/user');
        console.log(response.data.user);
        console.log('فات');
        // Do something with the data, e.g., update your component state
        dispatch(loginSuccess(response.data.user));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [NewComment, UpdateComment]);
     
 async function fetchData() {
   try {
     const projectResponse = await axios.get(`/projects/${id}`);
     setProjectcomment(projectResponse.data.review);
     setProject(projectResponse.data);
     setfreelancer(projectResponse.data.user);
     setisloading(false);
     console.log("Projectcomment", projectResponse.data); // Log the actual data from the API response
   } catch (error) {
     console.error("Error fetching data:", error);
   }
 }




function PostComment() {
  axios.post("/reviews/add",NewComment).then((response)=>{
     fetchData(); 

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
        
    });
setNewComment({
  ...NewComment,
  comment: "",
});
    Toast.fire({
      icon: "success",
      title: "Your Comment Add successfully",
    });
    console.log(response);
  });
  
}
function UpdateForm() {
  axios.put(`reviews/update/${id}`, UpdateComment).then((response) => {
    fetchData();

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Your Comment Edited successfully",
    });
    console.log(response);
  });
  
}

function EditForm(id) {
     const singlereview = axios.get(`/review/${id}`).then((response)=>{setsinglecomment(response);});

return (
  <>
    <div className="absform" id="absform">
      <fieldset>
        <div className="form-group">
          <img src={userlogin.image} width={"60px"}></img>

          <input
            type="text"
            name="comment"
            className="form-control"
            placeholder="comment*"
            value={singlecomment.comment}
            onChange={(e) =>
              setUpdateComment({
                ...UpdateComment,
                comment: e.target.value,
              })
            }
          />
        </div>
      </fieldset>
      <br></br>
      <div className="form-group">
        <button
          className="wt-btn"
          onClick={() => {
            UpdateForm();
          }}>
          Send
        </button>
      </div>
    </div>
    ;
  </>
);
}


  // const [user,setuser]=useState({})
  function delet(id) {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`reviews/delete/${id}`).then(() => {
           fetchData(); 
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        });
      }
    });
  }


//   async function EditForm(id) {

//     await axios.get(`review/${id}`).then((response)=>{

//       console.log(response);
//       setUpdateComment({
//         ...UpdateComment,
//         project_id: response.data.project_id,
//       });
//       setUpdateComment({
//         ...UpdateComment,
//         comment: response.data.comment,
//       });


//       // setUpdateComment({
//       //   ...UpdateComment,
//       //   comment: response.data.comment,
//       // });
//     });
//     let oldcomment = UpdateComment.comment;
//     let updayteid = id;

//   try {
//     // Use await to wait for the axios.get request to complete
  
   
//    const {UpdateComment } = await Swal.fire({
//      title: "Edit Your Comment",
//      input: "text",
//      input: "text",
//      html:`
     
//      `,
//      inputValue: UpdateComment.comment, // Set the initial value
//      inputAttributes: {
//        autocapitalize: "off",
//      },
//      showCancelButton: true,
//      confirmButtonText: "Edit Comment",
//      showLoaderOnConfirm: true,
//      preConfirm: (inputValue) => {
      
//        setUpdateComment({ ...UpdateComment, comment: inputValue });
//        console.log("formData", id);
//        try {
//          console.log("updayteid", updayteid);
//          console.log("UpdateComment", UpdateComment);
//          // Use await to wait for the axios.put request to complete
       
//          fetchData();
//         //  console.log(response);
//        } catch (error) {
//          Swal.showValidationMessage(`Request failed: ${error.message}`);
//        }
//      },
//      allowOutsideClick: () => !Swal.isLoading(),
//    });

//     if (true) {
//       const response = axios.put(`/reviews/update/${updayteid}`, UpdateComment);
//       Swal.fire({
//         // title: `${newComment.login}'s avatar`,
//         // imageUrl: newComment.avatar_url,
//       });
//     }
//   } catch (error) {
//     console.error(error);
//     // Handle any errors that may occur during the process
//   }
// }

  // }
  const [Projectcomments, setProjectcomment] = useState({});
// ?????????????????????????????????????
// Get THe dATA FROM Api
// ?????????????????????????????????????
  useEffect(() => {
    
   

    fetchData();
  }, [id]);
  return (
    <>
      {isloading ? (
        <p>Loading</p>
      ) : (
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 float-left">
          {Projectcomments.map((Projectcomment) => (
            <div className="wt-author">
              <div className="wt-authordetails">
                <figure>
                  <a href="javascript:void(0);">
                    <img
                      style={{ width: "66px" }}
                      src={Projectcomment.user.image}
                      alt="image description"
                    />
                  </a>
                </figure>
                <div className="wt-authorcontent">
                  <div className="wt-authorhead">
                    <div className="wt-boxleft">
                      <h3>
                        <a href="javascript:void(0);">
                          {Projectcomment.user.name}
                        </a>
                      </h3>
                      <span>
                        <i className="lnr lnr-clock" /> Author Since:{" "}
                        {Projectcomment.review_date}
                      
                      </span>
                    </div>
                    <div className="wt-boxright">
                      <ul className="wt-socialiconssimple">
                        <li className="wt-facebook">
                          <div className="wt-rightarea  testtest">
                            <span className="wt-starsvtwo">
                              {Array.from(
                                { length: Projectcomment.rating },
                                (_, index) => (
                                  <i key={index} className="fa fa-star fill" />
                                )
                              )}
                            </span>
                            <span className="wt-starcontent">
                              {Projectcomment.rating}/<sub>5</sub>
                            </span>
                          </div>
                        </li>
                        {/* <li className="wt-twitter"> */}
                        {parseInt(userlogin.id) ===
                          parseInt(Projectcomment.user_id) ||
                        userlogin.id === Project.seller_id ? (
                          <Dropdown>
                            <Dropdown.Toggle
                              id="dropdown-basic"
                              style={{
                                position: "absolute",
                                top: -37,
                                backgroundColor: "transparent",
                                right: -21,
                                border: "none",
                              }}>
                              <svg
                                style={{ color: "red" }}
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-three-dots-vertical"
                                viewBox="0 0 16 16">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                              </svg>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              {parseInt(userlogin.id) ===
                                parseInt(Projectcomment.user_id) && (
                                <Dropdown.Item
                                  onClick={() => {
                                    EditForm(Projectcomment.id);
                                  }}></Dropdown.Item>
                              )}

                              <Dropdown.Item
                                // <button ></button>
                                onClick={() => delet(Projectcomment.id)}>
                                Delete
                              </Dropdown.Item>
                            </Dropdown.Menu>
                            <NewForm />
                          </Dropdown>
                        ) : (
                          <span></span>
                        )}
                      </ul>
                    </div>
                  </div>
                  <div className="wt-description">
                    <p>{Projectcomment.comment}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="wt-replaybox">
            <h2>Leave Your Comment</h2>

            <fieldset>
              <div className="form-group">
                <img src={userlogin.image} width={"60px"}></img>

                <input
                  type="text"
                  name="comment"
                  className="form-control"
                  placeholder="comment*"
                  onChange={(e) =>
                    setNewComment({
                      ...NewComment,
                      comment: e.target.value,
                    })
                  }
                />
              </div>
            </fieldset>
            <br></br>
            <div className="form-group">
              <button
                className="wt-btn"
                onClick={() => {
                  PostComment();
                }}>
                Send
              </button>
            </div>
          </div>
        </div>
        // ))
      )}
    </>
  );}


