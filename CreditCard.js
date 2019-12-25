import {React} from 'react' 

export class CreditCard extends React.Component{


   consrtuctor(props){
      super(props) 
       this.state = {
         number = '', 
         data = '', 
         owner = '', 
         CVV = ''
      } 
//Так же все методы надо привязать,чтобы использовать this в них, приведу один
      this.onChange = this.onChange.bind(this) 
   }
 
//Все аналогичны, напишу один
   onChange(e) {
//Вот тут делаете валидацию или добавляете / если это Data 
      this.state.number = e.value
   }
 
   onClick(e) {
      sendData(this.state.number, this.state.date, this.state.CVV, this.state.owner) 
   }


   render() {
      return(
      <input onChange={this.onChangeNumber(event)} value={this.state.number}/>
      <input onChange={this.onChangeData(event)} value={this.state.data}/>
      <input onChange={this.onChangeOwner(event)} value={this.state.owner}/>
      <input onChange={this.onChangeCVV(event)} value={this.state.CVV}/>
      <button onClick={this.onClick() }/>
      ) 
   }
}
