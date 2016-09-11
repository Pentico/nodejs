/**
 * Created by Tuane on 2016/09/11.
 */

function Emitter() {
    this.events = {};
    
}

Emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || []; // if this events exist good else make an array
    this.events[type].push(listener);
};

Emitter.prototype.emit = function (type) {
    
    if (this.events[type]){
        this.events[type].forEach(function (listener) {
            listener();
        });
    }
};

module.exports = Emitter;