'use strict';

var frames=[];
frames.push(`
╭~~~╮
(o^.^o)
`);

frames.push(`
╭~~~╮
(o~.~o)
`);

frames.push(`
╭~~~╮
(o@.@o)
`);

frames.push(`
╭ ﹌╮
(o'.'o)
`);

var count = 0;
setInterval(function(){
    // 先清屏
 	process.stdout.write('\u001b[2J\u001b[0;0H');	
	
	count++;

	// if(count === frames.length){
	// 	count =0;
	// }

	count = count === frames.length ? 0:count;

	process.stdout.write(frames[count]);

},1000/15);


// frames.forEach(function(item,index){
// 	console.log(item + '  ' +index);
// });
