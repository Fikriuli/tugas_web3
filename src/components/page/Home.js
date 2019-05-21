import React, {Component} from 'react';
import { Image, Grid, Header, Button, Segment } from 'semantic-ui-react';
import axios from 'axios';

class Home extends React.Component{
    state = {
        datahome : []
    }

    componentDidMount() {
        axios.get(`http://my-json-server.typicode.com/Fikriuli/tugasxhome/home`)
          .then(res => {
            const datahome = res.data;
            this.setState({ datahome });
          })
      }

      render() {
        return (
            <div>
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    { this.state.datahome.map(homedata =>  
                <Grid columns={2}>
                  
                    <Grid.Column verticalAlign='middle' width={8} centered>
                      
                    <Image src={homedata.filepng} size='large' />
                    
                    </Grid.Column>
                      <Grid.Column verticalAlign='middle' width={8} centered>
                      
                      
                      <Grid.Row>
                      <Image src={homedata.name} size='large' />
                      </Grid.Row>
                      
                      <Grid.Row style={{
                        margin :'1em 0 0 1em',
                        width:'100%',  
                      }}>
                      <a href='https://www.dropbox.com/home/ImageTugasx?preview=CV_Fikri+Ulinukha.pdf'><Button color='blue' size='huge'>Download My CV</Button></a>
                      </Grid.Row>
                      </Grid.Column>
                    
                </Grid>
              )}

                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
              
        );
    }
}

export default Home;