import React, {Component} from 'react';
import axios from 'axios';
import { Card, Icon, Image, Grid, Button, Label } from 'semantic-ui-react';

class Portofolio extends Component {

    state = {
        dataporto : []
    }

    componentDidMount() {
        axios.get(`http://my-json-server.typicode.com/Fikriuli/portofolio_api/portofolio`)
          .then(res => {
            const dataporto = res.data;
            this.setState({ dataporto });
          })
      }
    
    render() {
        return (
            <div>
              <Grid column={2} stackable style={{
                margin :'0 10em 0 1em',
                width:'100%'
              }}>
                <Grid.Row column={3} style={{
                  display:'inline-block'
                }}>
                  
                  { this.state.dataporto.map(portofolio => 
                  <Grid.Column width={5}>
                    <Card>
                        <Image src={portofolio.thumbnile} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>{portofolio.name}</Card.Header>
                          <Card.Description>
                            {portofolio.deskripsi}
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a>
                            <Icon name='comment' />
                            22 Comment
                          </a>
                          
                        </Card.Content>
                      </Card>
                      </Grid.Column>
                    )}
                </Grid.Row>
              </Grid>
              
            </div>
        );
    }
}
export default Portofolio;
