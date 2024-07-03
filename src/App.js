import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Particles from './components/Particles';



const initialState = {
    input: '',
    imageUrl: '',
    box: {},
    route:"signin",
    user:{
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
    }
}
class App extends Component {
    constructor() {
        super();
        this.state = initialState;
    }

    loadUser = (data)=>{
        this.setState({
            user:{
                id: data.id,
                name: data.name,
                email: data.email,
                entries: data.entries,
                joined: data.joined
            }
        })
    }

    onInputChange = (event) => {
        this.setState({ input: event.target.value });
    }

    displayFacebox = (box) => {
        //console.log(box);
        this.setState({ box: box });
    }

    // componentDidMount(){
    //     fetch('http://localhost:3000')
    //         .then(response => response.json())
    //         .then(console.log);
    // }

    calculateFaceLocation = (data) => {
      const image = document.getElementById('inputimage');
      const width = Number(image.width);
      const height = Number(image.height);

      return {
          leftCol: data.leftCol * width,
          topRow: data.topRow * height,
          rightCol: width - data.rightCol * width,
          bottomRow: height - data.bottomRow * height
      }
    }

    onRouteChange = (route) => {
        if(route==='signout'){
            this.setState(initialState);
        }
        else
            this.setState({route:route});
    }


    onButtonSubmit = () => {
        // console.log("result");
        this.setState({ imageUrl: this.state.input }, () => {
            fetch('http://localhost:3000/imageurl',{
                            method: 'post',
                            headers: {'content-type':'application/json'},
                            body:JSON.stringify({
                                imageUrl:this.state.input
                            })
                        })

                .then(response => response.json())
                .then(result => {
                    
                    const regions = result.outputs[0].data.regions;

                    if (regions && regions.length > 0) {
                        const region = regions[0];
                        const boundingBox = region.region_info.bounding_box;

                        const faceBox = {
                            topRow: boundingBox.top_row,
                            leftCol: boundingBox.left_col,
                            bottomRow: boundingBox.bottom_row,
                            rightCol: boundingBox.right_col
                        };
                        fetch('http://localhost:3000/image',{
                            method: 'put',
                            headers: {'content-type':'application/json'},
                            body:JSON.stringify({
                                id:this.state.user.id
                            })
                        })
                        .then(response => response.json())
                        .then(count =>{
                            this.setState(Object.assign(this.state.user , {entries:count}))
                        })
                        .catch(console.log)
                        this.displayFacebox(this.calculateFaceLocation(faceBox));
                        // console.log(faceBox);
                    } 
                    // else {
                    //     console.log('No regions detected.');
                    // }
                })

                .catch(error => {
                    console.log('error', error);
                });
        });
    }

    render() {
        return (

            <div className="App">
                <Particles />
                <Navigation onRouteChange = {this.onRouteChange} route = {this.state.route}/>
                {this.state.route === 'home'
                  ?
                  <div>
                    
                    <Logo />
                    <Rank name = {this.state.user.name} entries = {this.state.user.entries}/>
                    <ImageLinkForm
                      onInputChange={this.onInputChange}
                      onButtonSubmit={this.onButtonSubmit}
                    />
                    <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
                  </div> 
                  : 
                  (this.state.route === 'signin'
                    ?
                    <SignIn loadUser = {this.loadUser} onRouteChange = {this.onRouteChange}/>
                    :
                    <Register loadUser = {this.loadUser} onRouteChange = {this.onRouteChange}/>
                  )
                }
            </div>
        );
    }
}

export default App;
