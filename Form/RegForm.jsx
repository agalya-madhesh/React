import {useState} from 'react'
import "./RegForm.css"

export const RegForm = () => {

const [user, setUser]= useState({
name : "Agalya",
age :25,
gender :"female",
isMarried :true,
country:"India",
bio:"Write about yourself",
});


function changeHandler(e){
    const name= e.target.name;
    // console.log(name);
    const value= e.target.type=="checkbox"?e.target.checked:e.target.value;
    setUser({...user,[name] : value});
}
  return (
    <>
    <h2>User Registration Form</h2>
    <table>
        <tbody>
            <tr>
                <td>Name</td>
                <td>{user.name}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{user.age}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>{user.gender}</td>
            </tr>
            <tr>
                <td>IsMarried</td>
                <td>{user.isMarried ? "Married" : "Not Married"}</td>
            </tr>

            <tr>
                <td>Country</td>
                <td>{user.country}</td>
            </tr>
    
            <tr>
                <td>Bio</td>
                <td>{user.bio}</td>
            </tr>
    
    </tbody>
    </table>

    <form>
        <input type="text" name="name" placeholder='Fullname' value={user.name} onChange={changeHandler}/>
        <input type="number"  name="age" placeholder='Age' value={user.age} onChange={changeHandler}/>
        <div className='gender'>
            <label htmlFor='male'>
                <input type='radio' name="gender"   id="Male" value="Male" checked= {user.gender == "Male"} onChange={changeHandler}/>Male
            </label>
            <label htmlFor='female'>
                <input type='radio' name="gender"  checked= {user.gender == "Female"} id="Female" value="Female" onChange={changeHandler}/>Female
            </label>
        </div>
        <label htmlFor='isMarried'>
            <input type='checkbox' name="isMarried" checked={user.isMarried} id='isMarried' onChange={changeHandler}/>IsMarried
        </label>

        <div className='select-div'>
            <label htmlFor='country'>Select Country</label>
            <select name="country" id='country' value={user.country} onChange={changeHandler}>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="US">US</option>
            </select>
        </div>
        <textarea name="bio" id="bio" cols="30" rows="5" placeholder='Write about you' onChange={changeHandler}></textarea>

    </form>
    </>
    );
};
