import React from 'react';
import { Button, Navbar } from 'react-bootstrap';
import homepage_img from './home_background.jpg';
import './homepage.css';
import RecipeTable from '../recipecard/RecipeTable';
import AppNavbar from '../AppNavbar';


function Homepage() {
    return (
        <div className="homecontainer">
            <AppNavbar/>
            <h1>RecipeHUB</h1>
            <div className="container">
              <Button variant="primary">Add a recipe</Button>
              <br/>
              <RecipeTable />
              <p>Footer</p>  
            </div>
                
      </div>
    );
}

export default Homepage;