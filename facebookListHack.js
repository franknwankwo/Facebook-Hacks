(function(console){
	var link = document.getElementsByClassName('UFINoWrap');
	var profileBlock = document.getElementsByClassName('fcb');
	if(link[0].dataset.testid === "n_other_people_link"){
		link[0].addEventListener('click', function(){
			var checkList = setInterval(function(){
				if(profileBlock.length > 0){
					console.likeList();
					clearInterval(checkList);
				}
			}, 1000);
		}, false);
	}
	console.likeList = function(){
	var profileBlock = document.getElementsByClassName('fcb'),
		nameArray = [];
	for(var x = 0; x < profileBlock.length; ++x){
		nameArray.push(profileBlock[x].getElementsByTagName('a')[0].innerHTML);
	}
    if(!nameArray) {
        console.error('Console.likeList: No data')
        return;
    }
    var filename = 'LikeList.csv',
    	blob = new Blob([nameArray.join('\n')], {type: 'text/csv'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')
    a.download = filename
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl =  ['text/csv', a.download, a.href]
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
 };
})(console);
