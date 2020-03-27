import React from "react";
import bgimage from "../Assets/Pizza.jpg";
import {
  Container,
  Card,
  CardBody,
  Jumbotron,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

export default function MyForm() {
  return (
    <>
      <Jumbotron
        fluid
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
        className='pt-5'
      >
        <Container>
          <Card className='mt-5 ml-5 mr-5 bg-success'>
            <CardBody>
              <h3 className='text-center'>Build Your Pizza Your Way</h3>
              <hr />
              <Form onSubmit='' className='p-2'>
                <Row form>
                  <Col md={{ size: 6, offset: 3 }}>
                    <FormGroup>
                      <Label htmlFor='name' />
                      <legend>Name For Order</legend>
                      <Input
                        id='name'
                        type='text'
                        name='name'
                        value=''
                        onChange=''
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label htmlFor='pizzaSize' />
                      <legend>Choose A Size</legend>
                      <Input
                        id='pizzaSize'
                        type='select'
                        name='pizzaSize'
                        value='Large'
                        onChange=''
                      >
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                        <option value='X-Large'>X-Large</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor='sauce' />
                      <legend>Choice of Sauce</legend>
                      <Input
                        id='sauce'
                        type='select'
                        name='sauce'
                        value='Normal'
                        onChange=''
                      >
                        <option value='Light'>Light</option>
                        <option value='Normal'>Normal</option>
                        <option value='Extra'>Extra</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={{ size: 4, offset: 2 }}>
                    <FormGroup>
                      <legend>Choose A Crust</legend>
                      <FormGroup check>
                        <Label htmlFor='original' />
                        <Input
                          id='original'
                          type='radio'
                          name='crust'
                          checked='true'
                        />{" "}
                        Original Crust
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='cajun' />
                        <Input id='cajun' type='radio' name='crust' /> Cajun
                        Crust
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='onion' />
                        <Input id='onion' type='radio' name='crust' /> Onion
                        Crust
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='ranch' />
                        <Input id='ranch' type='radio' name='crust' /> Ranch
                        Crust
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='butter' />
                        <Input id='butter' type='radio' name='crust' /> Butter
                        Crust
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='butterCheese' />
                        <Input
                          id='butterCheese'
                          type='radio'
                          name='crust'
                        />{" "}
                        Butter Cheese Crust
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='garlicHerb' />
                        <Input id='garlicHerb' type='radio' name='crust' />{" "}
                        Garlic Herb Crust
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='asiago' />
                        <Input id='asiago' type='radio' name='crust' /> Asiago
                        Crust
                      </FormGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <legend className='text-center'>Choose Toppings</legend>
                  <Col md={{ size: 4, offset: 2 }}>
                    <FormGroup>
                      <FormGroup check>
                        <Label htmlFor='pepperoni' />
                        <Input
                          id='pepperoni'
                          type='checkbox'
                          name='pepperoni'
                        />
                        Pepperoni
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='sausage' />
                        <Input id='sausage' type='checkbox' name='sausage' />
                        Sausage
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='canadianBacon' />
                        <Input
                          id='canadianBacon'
                          type='checkbox'
                          name='canadianBacon'
                        />
                        Canadian Bacon
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='italianSausage' />
                        <Input
                          id='italianSausage'
                          type='checkbox'
                          name='italianSausage'
                        />
                        Spicey Italian Sausage
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='grilledChicken' />
                        <Input
                          id='grilledChicken'
                          type='checkbox'
                          name='grilledChicken'
                        />
                        Grilled Chicken
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='onions' />
                        <Input id='onions' type='checkbox' name='onions' />
                        Onions
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='greenPepper' />
                        <Input
                          id='greenPepper'
                          type='checkbox'
                          name='greenPepper'
                        />
                        Green Pepper
                      </FormGroup>
                    </FormGroup>
                  </Col>
                  <Col md={{ size: 4, offset: 2 }}>
                    <FormGroup>
                      <FormGroup check>
                        <Label htmlFor='pepperoni' />
                        <Input
                          id='pepperoni'
                          type='checkbox'
                          name='pepperoni'
                        />
                        Pepperoni
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='sausage' />
                        <Input id='sausage' type='checkbox' name='sausage' />
                        Sausage
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='canadianBacon' />
                        <Input
                          id='canadianBacon'
                          type='checkbox'
                          name='canadianBacon'
                        />
                        Canadian Bacon
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='italianSausage' />
                        <Input
                          id='italianSausage'
                          type='checkbox'
                          name='italianSausage'
                        />
                        Spicey Italian Sausage
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='grilledChicken' />
                        <Input
                          id='grilledChicken'
                          type='checkbox'
                          name='grilledChicken'
                        />
                        Grilled Chicken
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='onions' />
                        <Input id='onions' type='checkbox' name='onions' />
                        Onions
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='greenPepper' />
                        <Input
                          id='greenPepper'
                          type='checkbox'
                          name='greenPepper'
                        />
                        Green Pepper
                      </FormGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col
                    sm={{ size: "auto", offset: 5 }}
                    md={{ size: "auto", offset: 5 }}
                  >
                    <Button color='primary'>Place Order</Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Container>
      </Jumbotron>
    </>
  );
}
