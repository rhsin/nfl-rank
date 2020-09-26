# NFL-Rank
<table>
<tr>
<td>
  A web app to create your own NFL power rankings each week, which can be shared with other users. Also included is a chat application to message other users in realtime. App is currently deployed through Amazon Web Services.
</td>
</tr>
</table>


## Site

### Dashboard
The user's dashboard displays all teams where they can submit a new rank for each team. The sidebar shows all of their power rankings, where they can move any team up or down a spot. 

![](/public/Dashboard.png?raw=true)


Users can also open up the chat app through the button on the bottom-right of the screen. Messages are pushed/retrieved in realtime using Firebase RT database.

![](/public/Chat.png?raw=true)

### Rankings
Here the user can compare their rankings with the other users. This page also has access to the chat app at the bottom.

![](public/Rankings.png?raw=true)


## Demo
Here is a working live demo on AWS :  (http://eblaravel-env.eba-qsnkmu83.us-west-2.elasticbeanstalk.com/)


## Mobile support
The app uses a responsive grid to cater to different devices & sizes. 


## Built with 
- [Laravel](https://laravel.com/) v7.24
- [React](https://reactjs.org/) v16.2.0
- [Redux](https://redux.js.org/) v4.0.5
- [MySQL](https://www.mysql.com/) v5.7.24
- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) 
- [Firebase](https://firebase.google.com/) v7.20.0
- [Bootstrap](http://getbootstrap.com/) v4.0.0


## To-do
- Add weekly comparisons up to Playoffs
- Connect with other sports data APIs for league updates


## Contact
Created by Ryan Hsin - please feel free to contact me!

