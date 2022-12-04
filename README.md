# shanandkevwed.com

The website for my upcoming wedding in January, 2023.  RSVP functionality will be live until mid to late January.  The live site can be viewed [here.](https://www.shanandkevwed.com)

### Overview
For the most part, the website is meant to give our attendees a way to RSVP, access our registry, and get ideas of things to do while in Winter Park, FL.  There is a live api deployed to Heroku with a single GET, POST and PATCH route, and one model (Invitee), built with Node, Express, MongoDB and Mongoose you can view the code for [here](https://github.com/kblair40/wedding-api)

- IntersectionObserver API is used for animation triggers and updating the navbar to reflect the current section 'in view'.
- Gallery Images are not loaded until the gallery section is 1000 pixels from becoming in view.  
- I found code splitting to be much more difficult when there are not multiple routes to split code between.
- **Note:** Heroku dynos sleep after one hour of no activity.  If you test the RSVP search functionality by entering a common name (ex. kevin, erin), expect the first result to take a few seconds since the server needs to "wake up" first.  After you've received results, test it again and results should feel instantaneous.  I'm a big fan of MongoDB's autocomplete indexing functionality.  