// 1,2,3.
let hat = {
    size: 'large',
    color: 'orange',
  };
  console.log(hat.size); // large
  console.log(hat['color']); // orange

  hat.color = "Red";
  console.log(hat.color); // Red
  console.log(hat['cost']); // undefined


// 4.
let pen = {};
pen.ink = 'blue';
console.log(pen.ink); // blue


// 6,8.
let hatRate = {
    rating: function () {
      return 'Hat is top rated';
    },
    color: 'green',
  };
  console.log(hatRate.rating()); // Hat is top rated


// 7.
let hatIntro = {
    size: 'medium',
    color: 'green',
    introduction: function () {
      return `The size of hat is ${hat.size} and color is ${hat.color}`;
    },
  };
  hatIntro.introduction(); // The size of hat is medium and color is green.


// 9.
let bucket = {
    capacity: '5 Litre',
    customerMessage: function (desiredSize) {
      if (desiredSize > 5) {
        return 'This bucket is not large enough for you';
      }
    },
  };
  console.log(bucket.customerMessage(13)); // This bucket is not large enough for you


// 10.
function globalFunction() {
    return 'I can be called anywhere';
  }
  let obj = {
    func: globalFunction,
  };
  console.log(obj.func()); // I can be called anywhere


// 11,12,13.
let student = {
    age: 21,
    address: {
      city: 'Dharamshala',
      state: 'Himachal Pradesh',
    },
  };
  console.log(student.address.city); // Dharamshala
  console.log(student.address.state); // Himachal Pradesh
  student.address.Zip = '176057';
  console.log(student.address.Zip); // 176057
  console.log(student);
  delete student.age;
  console.log(student);


// 14.
var altcampus = {
    batch16: {
      totalStudents: '11',
    },
    batch15: {
      totalStudents: '9',
    },
    batch14: {
      totalStudents: '8',
    },
  };
  console.log(altcampus.batch16.totalStudents); // 11


// 15.
var obj15 = {
    name: 'Panther',
  };
  console.log('name' in obj15); // true

  