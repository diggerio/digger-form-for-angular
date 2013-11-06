module.exports = ' \n<div ng-form="diggerForm" class="form-horizontal">\n  <div class="form-group" ng-repeat="field in fields" ng-class="{\'has-error\': container.data(\'error.\' + field.name)}">\n    <label ng-if="field.label!=false" for="{{ field.name }}" class="control-label col-lg-4">{{ field.usetitle | fieldtitle | ucfirst }}</label>\n    <div ng-class="{\'col-lg-7\':field.label!=false,\'col-lg-11\':field.label==false}">\n      <digger-field readonly="readonly" field="field" container="container" fieldclass="fieldclass" />\n    </div>\n    \n    <div class="col-sm-1" ng-show="showedit">\n      <a href="#" class="btn btn-sm btn-warning" ng-click="$emit(\'deletefield\', field)">\n          <i class="fa fa-trash-o"></i>\n      </a>\n    </div>\n    \n  </div>\n  <div ng-transclude></div>\n</div>';