(function(console){
	var profileBlock = document.getElementsByClassName('fcb');
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
    var filename = 'GroupMembersList.csv',
    	blob = new Blob([nameArray.join('\n')], {type: 'text/csv'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')
    a.download = filename
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl =  ['text/csv', a.download, a.href]
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
 };
 console.likeList();
})(console);
