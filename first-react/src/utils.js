export function getImageUrl(person, size = "s") {
  // return "https://i.imgur.com/" + person.imageId + size + ".jpg";
  return `https://i.imgur.com/${person.imageId}${size}.jpg`;
}
