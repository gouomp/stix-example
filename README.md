# MILITARY UNIVERSITY OF TECHNOLOGY IN WARSAW
### FACULTY OF CYBERNETICS
   ![alt text](https://github.com/gouomp/stix-example/blob/master/logowat.png "Logo") 
###### Subject:
#### Quantitative methods for assessing the security of teleinformation systems
###### Project
#### STIX
## Structured Threat Information Expression (STIX™) real-world usage example.

###### Group: K7B1S4
###### Team: A

#### 1.	Task and requirements  
Write a program consisting of the producer module and the consumer module, listing CTI using the STIX threat description language.  

   **Requirements:**
  1. The application must implement selected few STIX elements.  
  2. The producer must allow CTI data entry.  
  3. Producer and consumer must display the received CTI.  
  4. Producer and consumer, they must be on other computers.  
  5. Producer-consumer communication, interface, language, DB – any.  
  6. The application must simplify the functionality and interface.  

#### 2.	Model for solution  
   
   ![alt text](https://github.com/gouomp/stix-example/blob/master/model.png "Model") 

#### 3.	Description of the model

  1. **Producer side:**  
  * A -Web form – the producer can fill a web form concerning the incidents have been founded in the organization  
  * Local storage – the producer can display his last reports in the browser  
  * HTTP POST – after filling and approval web form, it will be sent to the server by HTTP POST  

  2. **Consumer side:**  
  * B – application server is written in JAVA Spring and servicing all requests from producer and consumer  
  * C – database Redis – this database stores all data by KEY/VALUE thanks of that accumulating data is simpler and faster we can receive the response  
  * D – Web data visualization – this part of our application plays a role administration panel where Consumer can manage all notifications  
  * HTTP GET – The consumer sends a request to the server by HTTP GET method and he receives all data about some incidents in response.  
#### 4.	Example scenario
Example scenario consists of two cyber threat companies, Alpha and Beta, who share threat intelligence. A malicious URL was seen on Alpha’s network and an indicator was generated to capture this information. Alpha then shares this information with company Beta who later sees this indicator on their systems. Beta then creates a sighting of this indicator to share that this indicator has been spotted. Next Alpha can display all information about sighting noticed by Beta in administration panel.

   ![alt text](https://github.com/gouomp/stix-example/blob/master/exampleModel.png "Example model") 

Indicators on one organization's network are often spotted on other organizations' networks. When this is the case, a Sighting STIX Relationship Object (SRO) can be issued to relay that this specific indicator was seen. This example discusses how a company can use a Sighting for a STIX Indicator object.


**live demo:**
 * producer - https://cti-producer-web.herokuapp.com/
 * consumer - https://cti-consumer-web.herokuapp.com/

## installation / usage

### producer

#### web

```
# producer-web catalog:
$ cd ./producer/web

# available commands:
$ yarn install
$ yarn start
$ yarn prettier
$ yarn build

# heroku deploy
$ pwd
*/stix-example
$ heroku create cti-producer-web --buildpack mars/create-react-app
$ heroku git:remote -a cti-consumer-web
$ git subtree push --prefix producer/web heroku master
# or
$ git push --force heroku `git subtree split --prefix producer/web HEAD`:master
```

### consumer

#### server

```
/* todo */
```

#### web

```
# consumer-web catalog:
$ cd ./consumer/web

# available commands:
$ yarn install
$ yarn start
$ yarn prettier
$ yarn build

# heroku deploy
$ pwd
*/stix-example
$ heroku create cti-consumer-web --buildpack mars/create-react-app
$ heroku git:remote -a cti-consumer-web
$ git subtree push --prefix consumer/web heroku master
# or
$ git push --force heroku `git subtree split --prefix consumer/web HEAD`:master
```

## references

- https://oasis-open.github.io/cti-documentation/
- https://oasis-open.github.io/cti-documentation/examples/sighting-of-an-indicator?fbclid=IwAR2AP37MAE8XkF-YEYM97V7cWS2SEKFsIdpom2QMRYTCy5rweWMwSVXmH6w
