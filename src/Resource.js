import React, { Component } from 'react';

class Resource extends Component {
  render() {
    return (
    <div class='container-fluid'>
      <div class='row'>
        <div class='col-md-12'><h2><span class='label label-default'>1.1</span> Measuring Things, Including Lengths</h2></div>
      </div>
      <div class='row'>
        <div class='col-md-12'>
          <ul class='nav nav-tabs' role='tablist'>
            <li role='presentation'><a href='/#/' aria-controls='home' role='tab' data-toggle='tab'>Home</a></li>
            <li role='presentation'><a href='/#/resources' aria-controls='profile' role='tab' data-toggle='tab'>Resources</a></li>
            <li role='presentation'><a href='/#/practice' aria-controls='messages' role='tab' data-toggle='tab'>Practice</a></li>
            <li role='presentation' class='active'><a href='/#/related' aria-controls='related' role='tab' data-toggle='tab'>Related</a></li>
            <li role='presentation' class='pull-right'>
              <input id='search' type='text' placeholder='search for...' />
              <button type='button' class='btn btn-default btn-sm'>
                <span class='glyphicon glyphicon-search' aria-hidden='true'></span>
              </button>
              <button type='button' class='btn btn-default btn-sm'>
                <span class='glyphicon glyphicon-fullscreen' aria-hidden='true'></span>
              </button>
            </li>
          </ul>

          <div class='tab-content'>
            <div role='tabpanel' class='tab-pane' id='related'>
              <div>Nobis equidem corpora ne vim, te hinc equidem rationibus pro, pri ea utroque reprimique. Sale forensibus sadipscing et has. Amet viris expetendis eum ad, eu cum sumo autem impetus. Et civibus minimum torquatos nam, eam ceteros definiebas ea, eu latine virtute legimus has. Ad nam ferri atqui graeci, cum liber conceptam disputationi te, et eum debet fastidii conceptam. Consul mandamus cum ei, quo cibo solet ea.</div>
              <div>Saperet accusamus patrioque duo te, mei wisi modus adipiscing at, no vix debet reprehendunt. Invidunt omittantur est in, in pro iuvaret suscipit. Pri no voluptua dissentiet, ex vix eruditi incorrupte, possim commodo detracto ei mel. Antiopam voluptatibus delicatissimi usu te. Labores lobortis principes ad duo. Nam delenit deterruisset ne, solet consequat et sea.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Resource;
