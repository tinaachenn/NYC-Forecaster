# Web Development Project 6 - _NYC 7 Day Forecast_

Submitted by: **Tina Chen**

This web app: **shows some information about the 7 day forecast for NYC**

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app includes at least one unique chart developed using the fetched data that tell an interesting story**
- [x] **Clicking on an item in the list view displays more details about it**
- [x] **Clicking on an item has a direct, unique link to that item's detail view page**

The following **optional** features are implemented:

- [ ] The site's customized dashboard contains more content that explains what is interesting about the data
- [ ] The site allows users to toggle between different data visualizations

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<div>
    <a href="https://www.loom.com/share/46f79def2baa4b02b2627ebba953c8a7">
      <p>Video Walkthrough</p>
    </a>
    <p>Video Gif </p>
    <a href="https://www.loom.com/share/46f79def2baa4b02b2627ebba953c8a7">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/46f79def2baa4b02b2627ebba953c8a7-with-play.gif">
    </a>
  </div>
<!-- Replace this with whatever GIF tool you used! -->

GIF created with Loom

## Notes

Describe any challenges encountered while building the app.

Had a really really hard time passing data that I already fetched from my app.jsx file to my detailed views. I did not want to constantly refetch data when an item in the list is selected because of the fetch cap on the API I was using. Could not figure out how to pass data to routes and links as it was not explained in class. Thus, I settled on doing it the way it was described in the lab where I had to just refetch the data in each of the detailed views.

Also learning how to use js libraries for graphs and data visualization was a bit challenging but got it to work!

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
