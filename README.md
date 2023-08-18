

# nodejs-blog-api
The Blog REST API With Node.js

<p>I built this repo for fun and to learn how to make a rest api and server</p>

<p>The different things you can do with this server:</p>
<ul>
<li>Controllers - deals with database read/write operations and logic.</li>
<li>Models - define schemas of objects in collections the database.</li>
<li>Routes - defines the API routing for controller functions.</li>
<li>Middlewares - helper files, utils and methods. Basically anything that isn't done by a controller.</li>
</ul>


<h2>Installing & config </h2>
<p>Start the server with nodemon: <code>npm start</code>. Currently the default port for the server is <code>5000</code> and this can be set in the <code>.env</code>. This is to prevent clashes when running the server and clients in dev locally.for database i use <code>mongodb</code> and you can download and  <a href="https://www.mongodb.com/docs/manual/installation/">install </a> it also you can download and install <a href="https://www.mongodb.com/products/compass">MongoDB Compass.</a> Compass is a free interactive tool for querying, optimizing, and analyzing your MongoDB data. Get key insights, drag and drop to build pipelines, and more.</p> 

<h5>To killing the Port You can use :</h5>
<pre>
  <code>
    sudo fuser -n tcp -k 5000
  </code>
</pre>
<h5>Dependencies</h5>
<ul>
<li>bcryptjs: 2.4.3</li>
<li>dotenv : ^16.3.1</li>
<li>express: ^4.18.2</li>
<li>express-validator: ^7.0.1</li>
<li>jsonwebtoken: ^9.0.</li>
<li>mongoose: ^7.4.2</li>
<li>nodemon: 3.0.1</li>
</ul>

<h5>Note </h5>
<p>Using .env file to store secret variables in software applications is a good common practice in software development. These variables can be database credentials, urls, ip addresses or hosts, secret keys for third party integrations etc.Since this file contains secret variables, we don't push it to git/github so remember to include .env file in your .gitignore file under your project root directory.</p>


<h1>Implemented endpoints:</h1>

<h3>/User</h3>
<table>
  <tr>
    <th>Path</th>
    <td>Method</td>
    <td>Description</td>
  </tr>
  <tr>
    <th>/api/v1/users/</th>
    <td>GET</td>
    <td>Get all users</td>
  </tr>
  <tr>
    <th>/api/v1/users/login</th>  
    <td>POST</td>
    <td>User Login</td>
  </tr>
   <tr>
      <th> /api/v1/users/signup</th>  
      <td>POST</td>
      <td>User Signup</td>
    </tr>
   
</table>


<h3>/Post</h3>
<table>
  <tr>
    <th>Path</th>
    <td>Method</td>
    <td>Description</td>
  </tr>
  <tr>
    <th>//api/v1/posts/</th>
    <td>POST</td>
    <td>Add New Post</td>
  </tr>
  <tr>
    <th>/api/v1/posts/:pid</th>  
    <td>DELETE</td>
    <td>Delete Post by Post Id</td>
  </tr>

</table>



<h3>/Comments</h3>
<table>
  <tr>
    <th>Path</th>
    <td>Method</td>
    <td>Description</td>
  </tr>
  <tr>
    <th>/api/v1/comments/getAllComments</th>
    <td>Method</td>
    <td>Description</td>
  </tr>
  <tr>
    <th>/api/v1/comments/:pid</th>
    <td>GET</td>
    <td>Get All Comments</td>
  </tr>
  <tr>
    <th>/api/v1/comments/:cid</th>  
    <td>DELETE</td>
    <td>Delete Comments by Comment Id</td>
  </tr>

</table>




!!! Project still in progress !!!

