define(['react', 'jsx!components/loglist'], function(React, LogList) {
  var guid = (function() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
                 .toString(16)
                 .substring(1);
    }
    return function() {
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
             s4() + '-' + s4() + s4() + s4();
    };
  })();

  return React.createClass({

    connectWebsocket: function() {
      var rct = this;
      var conn = new WebSocket('ws://localhost:8000/logs/'+rct.props.accountID+'/'+rct.props.deviceID);
      conn.onopen = function() {
        console.log('[*] Connected to localhost:8000/logs/'+rct.props.accountID+'/'+rct.props.deviceID);
      };

      conn.onerror = function(e) {
        console.log('[-] Error: ' + e);
      };

      conn.onclose = function() {
        console.log('[-] Connection closed');
      };

      return conn;
    },

    getInitialState: function() {
      return {data: []};
    },
    componentDidMount: function() {
      var conn = this.connectWebsocket();
      var r = this;

      conn.onmessage = function(msg) {
        var data = msg.data;

        if(data == "Invalid or no input") { 
          console.log(data);
        } else {
          var oldState = r.state.data;
          var newStateArr = []
          var newState = newStateArr.concat($.parseJSON(msg.data)).concat(oldState);
          r.setState({data: newState});
        }
      };
    },
    render: function() {
      return (
        <div>
          <div className="row">
            <div className="large-12 large-centered columns">
              <h1>Watching Device Logs</h1>
              <h2 className="subheader">account: <em>{this.props.accountID}</em>; device: <em>{this.props.deviceID}</em></h2>
            </div>
          </div>
          <hr />
          <LogList data={this.state.data} />
        </div>
      );
    }
  });
});
