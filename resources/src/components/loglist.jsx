define(['react'], function(React) {
  return React.createClass({
    render: function() {
       var logNodes = this.props.data.map(function (logrow) {
         return (
           <div className="row">
             <div className="large-3 columns">
               {logrow.timestamp}
             </div>
             <div className="large-9 columns">
	       <pre>{JSON.stringify(logrow.properties, null, 2)}</pre>
             </div>
           </div>
         );
       });
       return (
         <div className="log-rows">
           {logNodes}
         </div>
       );
    }
  });
});
