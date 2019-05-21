import React, {Component} from 'react';
import axios from 'axios';
import { Form, Image, Grid, Icon } from 'semantic-ui-react';

class Kontak extends Component {
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

    handleChange = (e, { value }) => this.setState({ value })  

    render() {
        const { value } = this.state
        return (
            <div>
              <Grid>
                <Grid.Row>
                  <Grid.Column style={{
                    width:'100%'
                    
                  }}>
                    
                    { this.state.datahome.map(homedata =>
                    <Grid>
                    <Grid.Row>
                      <Grid.Column>
                      <Image src={homedata.profile} size='small' centered />
                      </Grid.Column>
                      </Grid.Row>
                      <Grid.Row style={{
                        
                        margin :'1em 0 1em 10em'
                      }}>
                      
                        <Icon name='mail' size='big' centered /> fikriuli98@gmail.com
                        <Icon name='instagram' size='big' centered /> @fikri.ulinukha
                        <Icon name='whatsapp' size='big' centered /> 0856 0064 7449
                        <Icon name='address book' size='big' centered /> Pogung lor, Mlati, Sinduadi, Sleman
                      
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column>
                    <Form>
                        <Form.Group widths='equal'>
                        <Form.Input fluid label='First name' placeholder='First name' />
                        <Form.Input fluid label='Last name' placeholder='Last name' />
                        </Form.Group>
                        <Form.TextArea label='About' placeholder='Tell us more about you...' />
                        <Form.Checkbox label='I agree to the Terms and Conditions' />
                        <Form.Button>Submit</Form.Button>
                    </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            )}

                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
                
            
        );
    }
}

export default Kontak;
