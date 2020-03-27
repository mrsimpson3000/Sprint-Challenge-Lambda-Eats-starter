import React, { useState, useEffect } from "react";
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
import axios from "axios";
import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .required("Must have a name for the order")
});

export default function MyForm() {
  // state for whether button should be disabled or not
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // managing state for our form inputs
  const [formState, setFormState] = useState({
    name: "",
    pizzaSize: "Large",
    sauce: "Normal",
    crust: "",
    pepperoni: "",
    sausage: "",
    canadianBacon: "",
    italianSausage: "",
    grilledChicken: "",
    onions: "",
    greenPepper: "",
    dicedTomatos: "",
    blackOlives: "",
    roastedGarlic: "",
    artichokeHearts: "",
    threeCheese: "",
    pineapple: "",
    extraCheese: "",
    textArea: ""
  });
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
                        value={formState.name}
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
                        value={formState.pizzaSize}
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
                        value={formState.sauce}
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
                        <Input id='original' type='radio' name='crust' />{" "}
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
                          checked={formState.pepperoni}
                        />
                        Pepperoni
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='sausage' />
                        <Input
                          id='sausage'
                          type='checkbox'
                          name='sausage'
                          checked={formState.sausage}
                        />
                        Sausage
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='canadianBacon' />
                        <Input
                          id='canadianBacon'
                          type='checkbox'
                          name='canadianBacon'
                          checked={formState.canadianBacon}
                        />
                        Canadian Bacon
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='italianSausage' />
                        <Input
                          id='italianSausage'
                          type='checkbox'
                          name='italianSausage'
                          checked={formState.italianSausage}
                        />
                        Spicey Italian Sausage
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='grilledChicken' />
                        <Input
                          id='grilledChicken'
                          type='checkbox'
                          name='grilledChicken'
                          checked={formState.grilledChicken}
                        />
                        Grilled Chicken
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='onions' />
                        <Input
                          id='onions'
                          type='checkbox'
                          name='onions'
                          checked={formState.onions}
                        />
                        Onions
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='greenPepper' />
                        <Input
                          id='greenPepper'
                          type='checkbox'
                          name='greenPepper'
                          checked={formState.greenPepper}
                        />
                        Green Pepper
                      </FormGroup>
                    </FormGroup>
                  </Col>
                  <Col md={{ size: 4, offset: 2 }}>
                    <FormGroup>
                      <FormGroup check>
                        <Label htmlFor='dicedTomatos' />
                        <Input
                          id='dicedTomatos'
                          type='checkbox'
                          name='dicedTomatos'
                          checked={formState.dicedTomatos}
                        />
                        Diced Tomatos
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='blackOlives' />
                        <Input
                          id='blackOlives'
                          type='checkbox'
                          name='blackOlives'
                          checked={formState.blackOlives}
                        />
                        Black Olives
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='roastedGarlic' />
                        <Input
                          id='roastedGarlic'
                          type='checkbox'
                          name='roastedGarlic'
                          checked={formState.roastedGarlic}
                        />
                        Roasted Garlic
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='artichokeHearts' />
                        <Input
                          id='artichokeHearts'
                          type='checkbox'
                          name='artichokeHearts'
                          checked={formState.artichokeHearts}
                        />
                        Artichoke Hearts
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='threeCheese' />
                        <Input
                          id='threeCheese'
                          type='checkbox'
                          name='threeCheese'
                          checked={formState.threeCheese}
                        />
                        Three Cheese
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='pineapple' />
                        <Input
                          id='pineapple'
                          type='checkbox'
                          name='pineapple'
                          checked={formState.pineapple}
                        />
                        Pineapple
                      </FormGroup>
                      <FormGroup check>
                        <Label htmlFor='extraCheese' />
                        <Input
                          id='extraCheese'
                          type='checkbox'
                          name='extraCheese'
                          checked={formState.extraCheese}
                        />
                        Extra Cheese
                      </FormGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={12}>
                    <FormGroup>
                      <Label htmlFor='textArea' />
                      <legend>Special Instructions</legend>
                      <Input
                        id='textArea'
                        type='textarea'
                        name='textArea'
                        value={formState.textArea}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col
                    sm={{ size: "auto", offset: 5 }}
                    md={{ size: "auto", offset: 5 }}
                  >
                    <Button color='primary' disabled={buttonDisabled}>
                      Place Order
                    </Button>
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
