# simple-bs-carousel
Simple Script to Display Images Dynamically Using Bootstrap 5 Carousel 5 Component

## About

This is a simple script that utilizes Bootstrap 5's carousel component to dynamically display images using a JavaScript function. Essentially, instead of hardcoding each slide in the html, it calls the function in the script that will iterate through an array that has the src tag locations for each image. The idea being that you can take this further by implementing a call to a database (I used PHP) to get the images you want to display. There are plenty of implementations for displaying images in a slide show format that you can use, I just found Bootstrap 5 had the items I needed and decided to use it and share my findings with this script. 

Read more about Bootstrap 5 carousel component here: https://getbootstrap.com/docs/5.3/components/carousel/

## License

Feel free to modify, distribute, improve this script to suite your own needs. There is nothing here to overly complex or proprietary that I feel requires any sort of restrictive licensing scheme, it's pretty straightforward and has room for improvement. 

The images provided as examples in /img/ are also free to use and to modify if desired. 

However, since the example index.html this uses bootstrap's components, css, and scripts, it is subject to their licensing and usage found here: https://github.com/twbs/bootstrap/blob/main/LICENSE

## Files

index.html is a basic html file that uses one of the examples found here directly from Bootstrap's site. 
carousel.js is the script that is required to make the carousel work. 
img/exa1.jpeg - img/exa3.jpeg are example images to help demonstrate how the script works. 

## Usage

Modify the 'imageUrls' to reference the file location of the images you want to use. When you load the index.html file, the images should populate the container and the forward and back arrows should advance through each image of the array. 

Loading the index.html locally should work using the example images found in /img/ folder. If the page does not work or load properly, make sure you can access the bootstrap CDN links or try downloading bootstrap locally and updating the src links to the stylesheets and js. 

Additionally, you can place the container from the index.html file into your own work and it should work, as long as you have either the bootstrap css and scripts loaded in your file (either locally or via CDN as in the example index.html).
