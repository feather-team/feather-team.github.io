define('/static/js/pagelet.js', function(require, exports, module){
var doc = document;

function _(_id){
	return doc.getElementById(_id);
}

function append(_parent, childNode){
	_parent.appendChild(childNode);
}

module.exports = function(id, targetId){
	var id = _(id), target = _(targetId), frame = document.createDocumentFragment();

	for(var i = 0; i < id.childNodes.length; i++)
		append(frame, id.childNodes[i--]);

	append(_(targetId), frame);
	
	id.parentNode.removeChild(id);
};
});