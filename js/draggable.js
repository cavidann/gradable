// function Draggable(container) {
//     var self = this;

//     self.container = document.querySelector(container);

    



//     self.container.addEventListener('drop', function(event) {
//         event.preventDefault();
//         var id = event.dataTransfer.getData("id");
//         event.dataTransfer.effectAllowed = 'move';
//        event.dataTransfer.setData('id', self.innerHTML);

//     });


//     for (var i = 0; i < self.container.childElementCount; i++) {
//         self.container.children[i].setAttribute('draggable', true);
//         self.container.children[i].id = 'item_' + (i + 1);

//         self.container.children[i].addEventListener('dragstart', function(event) {
//             event.dataTransfer.setData("id", event.target.id);
//               this.style.opacity = '0.4';

//   self = this;

//   event.dataTransfer.effectAllowed = 'move';
//   event.dataTransfer.setData('text/html', this.innerHTML);
  
//         });
// self.container.addEventListener('dragend', function(ev) {
// for (var i = 0; i < self.container.childElementCount; i++) {
//    self.container.classList.remove('over');
// }
// })





//         self.container.addEventListener('dragover', function(ev) {
//        if (ev.preventDefault) {
//     ev.preventDefault(); // Necessary. Allows us to drop.
//   }

//   ev.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

//   return false;
  
//     });
// self.container.addEventListener('dragenter', function(ev) {
//   this.classList.add('over');
// });

// self.container.addEventListener('dragleave', function(ev) {
//   this.classList.remove('over');  
// });


// self.container.addEventListener('drop', function(ev) {
//    if (ev.stopPropagation) {
//     ev.stopPropagation(); // Stops some browsers from redirecting.
//   }

//   // Don't do anything if dropping the same column we're dragging.
//   if (self != this) {
//     // Set the source column's HTML to the HTML of the column we dropped on.
//     self.innerHTML = this.innerHTML;
//     this.innerHTML = ev.dataTransfer.getData('text/html');
//   }

//   return false;
// });



//     }







// }

// ///////////////////////////////////////////////////
//////////////////////////////////////////////////////
// ///////////////////////////////////////////////////
//////////////////////////////////////////////////////
function Draggable(){

var cols = document.querySelectorAll('.main .list');
[].forEach.call(cols, function(col) {
  col.addEventListener('dragstart', handleDragStart, false);
});




var self = null;

function handleDragStart(e) {
  // Target (this) element is the source node.
  // this.style.opacity = '0.4';

  self = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}





function handleDrop(e) {
  // this/e.target is current target element.

  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }

  // Don't do anything if dropping the same column we're dragging.
  if (self != this) {
    // Set the source column's HTML to the HTML of the column we dropped on.
    self.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}





function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }

  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

  return false;
}





function handleDragEnter(e) {
  // this / e.target is the current hover target.
  this.classList.add('over');
}




function handleDragLeave(e) {
  this.classList.remove('over');  // this / e.target is previous target element.
}




function handleDragEnd(e) {
  // this/e.target is the source node.

  [].forEach.call(cols, function (col) {
    col.classList.remove('over');
  });
}



var cols = document.querySelectorAll('#columns .column');
[].forEach.call(cols, function(col) {
  col.addEventListener('dragstart', handleDragStart, false);
  col.addEventListener('dragenter', handleDragEnter, false);
  col.addEventListener('dragover', handleDragOver, false);
  col.addEventListener('dragleave', handleDragLeave, false);
  col.addEventListener('drop', handleDrop, false);
  col.addEventListener('dragend', handleDragEnd, false);
});








}