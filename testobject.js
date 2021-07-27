let clock =  new function  () {
    this.start = () => this.offSet = Date.now();
    this.stop = () => {
        this.time = (Date.now() - this.offSet)/1000;
        console.log(this.time); 
        //alert(this.time);
    } 
}
