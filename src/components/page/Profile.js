import React, {Component} from 'react';
import { Image, Grid, Container, Item, Header, Progress } from 'semantic-ui-react';
import axios from 'axios';

class Profile extends Component {
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
            <ul>
                { this.state.datahome.map(homedata =>  
                <Grid>
                  <Grid.Row>
                    <Grid.Column>
                    <Image src={homedata.profile} size='medium' centered />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                    <Container textAlign='center' as='h3'>
                    <p> Hallo, saya Fikri Ulinukha, atau teman-teman sering memanggil saya Fikri atau Ulin.
                      Saya merupakan mahasiswa di D3 Komputer dan Sistem Informasi Sekolah Vokasi Universitas Gadjah Mada.
                      Saya asli dari Ponorogo, atau mungkin lebih dikenal dengan sebutan kota reog karena memang
                      kota ini terkenal akan kesenian reognya. Alamat saya ada di Jalan Diponegoro Karangan Balong
                       Ponorogo Jawa Timur. Kalo di Jogja saya tinggal di Pogung lor Mlati Sleman Yogyakarta.
                    </p>
                    </Container>
                    </Grid.Column>
                  </Grid.Row>
                  
                  <Grid.Row style={{
                    margin :'7em 0 1em 0',
                  }}>
                  <Header as='h2'>Riwayat Pendidikan</Header>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column >
                    <Item.Group>
                      <Item>
                        <Item.Image size='small' src='https://image.flaticon.com/icons/svg/183/183757.svg' />

                        <Item.Content style={{
                          margin :'3em 0 0 0',
                        }}>
                          <Item.Header as='a'>D3 Komputer dan Sistem Informasi SV UGM</Item.Header>
                          <Item.Description>
                            <p>2017 - Sekarang</p>
                            <p>D3 Komputer dan Sistem Informasi merupakan salah satu program studi di Fakultas
                              Sekolah Vokasi Universitas Gadjah Mada
                            </p>
                          </Item.Description>
                        </Item.Content>
                      </Item>

                      <Item>

                        <Item.Content style={{
                          margin :'3em 0 0 0',
                        }}>
                          <Item.Header as='a'>MAN 2 Ponorogo</Item.Header>
                          <Item.Description >
                            <p>2014-2017</p>
                            <p>MAN 2 Ponorogo merupakan salah satu Madrasah Aliyah dibawah naungan Kementrian Agama
                              yang berlokasi di Keniten Ponorogo
                            </p>
                          </Item.Description>
                        </Item.Content>
                        <Item.Image size='small' src='https://image.flaticon.com/icons/svg/1778/1778330.svg' />
                      </Item>

                      <Item>
                        <Item.Image size='small' src='https://image.flaticon.com/icons/svg/1802/1802494.svg' />

                        <Item.Content style={{
                          margin :'3em 0 0 0',
                        }}>
                          <Item.Header as='a'>SMP N 1 Balong</Item.Header>
                          <Item.Description>
                            <p>2011-2014</p>
                            <p>SMP N 1 Balong merupakan Sekolah Menengah Pertama Negri yang berlokasi di Kecamatan
                              Balong Kabupaten Ponorogo </p>
                          </Item.Description>
                        </Item.Content>
                      </Item>

                      <Item>

                        <Item.Content style={{
                          margin :'3em 0 0 0',
                        }}>
                          <Item.Header as='a'>SD N 1 Karangan</Item.Header>
                          <Item.Description>
                            <p>2005</p>
                            <p>SD N 1 Karangan merupakan Sekolah Dasar Negri yang berlokasi di Desa Karangan Kecamatan
                              Balong Kabupaten Ponorogo </p>
                          </Item.Description>
                        </Item.Content>
                        <Item.Image size='small' src='https://image.flaticon.com/icons/svg/167/167707.svg' />
                      </Item>
                    </Item.Group>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row style={{
                    margin :'5em 0 1em 0',
                  }}>
                  <Header as='h2'>Skill</Header>
                  </Grid.Row>
                  
                  <Grid.Row>
                    <Grid.Column >
                    <Header as='h4'>Corel Draw</Header>
                    <Progress percent={90} color='green' />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column >
                    <Header as='h4'>Adobe Ilustrator</Header>
                    <Progress percent={80} color='yellow' />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column >
                    <Header as='h4'>Adobe Photoshop</Header>
                    <Progress percent={70} color='orange' />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column >
                    <Header as='h4'>Adobe Xd</Header>
                    <Progress percent={80} color='yellow' />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column >
                    <Header as='h4'>Adobe Premier</Header>
                    <Progress percent={70} color='orange' />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column >
                    <Header as='h4'>Adobe After Effect</Header>
                    <Progress percent={70} color='orange' />
                    </Grid.Column>
                  </Grid.Row>

                </Grid>
                
              )}
            </ul>
        );
    }
}

export default Profile;
