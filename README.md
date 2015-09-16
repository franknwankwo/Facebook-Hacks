# Facebook Hacks
a script that will allow users to extract a list of likes from a page in csv format


******Make sure that you do this in Google Chrome, It's the only browser that I tested it on!!!!!*******

How this works

**Facebook Post Likes List**
File: facebookListHack.js

1.	First you need to go to your page, this is where you can manage your page insights and notification…

2.	In the top bar you’ll see “Page, Messages, Notifications, Insights, Publishing Tools,” click "Insights" from that list.

3.	Now once in page insights, you’ll scroll down until you see most recent posts. Select any post from that list (or you can select more… to see older posts).

4.	Once you found the post you want, click the post link and a  “post detail” modal(pop up window) should pop up. 

5.	Under the post you will see the number of likes, for example: 6 Likes. Click it, to reveal below it a short list of names followed by the number of others who liked your post. For example: John Doe, Jane Doe, Mary Jane and 3 others likes this.

6.	Right click the modal and select inspect element. This should make your console appear.

7.	Make sure the console tab is selected. You should see in big bold red letters "STOP!" … or something like that… that means you’re in the right place. At this moment you will paste the facebookListHack.js script into your console and press “Enter.” It should return “undefined” in the console.

8.	You can now close your console, go back to the modal and click the link Where it says “# others” and a csv 'LikeList.csv' file will automatically download. This file can be opened in excel or whatever and will contain the list of people who liked your post.

**Facebook Group Member List**
File: facebookGroupMemberHack.js

1.	First you need to go to your Groups page

2.	In the top bar under the cover photo, you'll see Discussion, Members, Events, Photos, Files,” click "Members" from that list.

3.  Right click anywhere on the page and select inspect element. This should make your console appear.

4.	You should see in big bold red letters "STOP!" … or something like that… that means you’re in the right place. At this moment you will paste the facebookGroupMemberHack.js  script into your console and press “Enter.” It should automatically download the 'GroupMembersList.csv' file to your computer.

Enjoy!

-Frank Nwankwo
