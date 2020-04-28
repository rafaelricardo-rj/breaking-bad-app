# breaking-bad-app

#Introduction
	The purpose of this work is to build an Ionic application that can consume Breaking Bad API https://breakingbadapi.com and display the data in 4 tabs – Characters, Episodes, Quotes,
Death Count. The Characters and Episodes tabs require implementing Pagination through an
Infinite Scroll, while the Quotes and Death Count tabs require implementing a Search functionality.
A Details Page should be present for displaying each Character and Episode and provide the ability
for Liking and Disliking, where these values will be stored persistently.

#Achievements

#API Request
A service was created to make some requests to the Breaking Bad API Web Service. See below the resources created in the “api.service.ts” created.
    • Paginated request to the endpoint “/api/characters?limit={n}&offset={n}”
    • Request to fetch one character by ID.
    • A function to request all episodes.
    • A function to request an episode by ID.
    • Function to fetch all quotes.
    • Function to get all deaths.

All of the request have with callback function to handle http code error.

#Summary
	The page Character is called "Cast" and it has an Infinite Scroll component that is updated as you scroll down. When an item of the list is clicked, another page is opened with more details about the caracher fetched by their ID. 
n the character details page you can favourite the character.

In the page Episodes all episodes are shown per season. To do that, a function was created in the controller to filter the response from API by season. This function is called in the view layer(episodes.page.html) and when the episode is clicked, another page with more details is displayed.

The third main page shows some quotes that have been spoken through the season. The results of the API endpoint don't bring any image from the author of the quotes, so a class was created with all URL of the images of the characters and this url path are bind with the results of the API through the name of the author.
At the same page, is possible to do a search by the name of the author or quote filtering the list. The last page is named Deaths. This page fetch all deaths and show the responsible and number of deaths. For the purpose of trying  something new a differente backgroung image was set in this page but now a gif was used.
The theme was changed with new colors and a background image was set for the whole application.

#Github
https://github.com/rafaelricardo-rj/breaking-bad-app

#References

1 - John Athan, 2013. 8. Font used in the application. Inspired by Breaking Bad. Free for all use!
 [Online] Available at: <https://www.dafont.com/pt/heart-breaking-bad.font?text=Breaking+Bad>
[Accessed 25th April. 2020].

2 - Simon Grimm, 2019. 8. Building an Ionic 4 Pokédex with Search & Infinite Scroll
[Online] Available at: <https://www.youtube.com/watch?v=Nc1RqvDY-B8>
3 - https://www.iconfinder.com/icons/4043240/avatar_bad_breaking_chemisrty_heisenberg_icon
Breaking bad icon. Author: Laura Reen
4 - Singletons in Ionic 3, Angular 4
http://singletonsinlonic.blogspot.com/2017/05/singletons-in-ionic-3-angular-4.html
5 - https://ionicframework.com/docs/api/loading
