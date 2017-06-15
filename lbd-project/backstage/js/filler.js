//公司行业
app.filter('change_industry',function(con) {
	return function(industrylist) {//这里的industryList和后台的数据没关系。就是自己取的名字
		for (var i = 0; i < industrylist.length; i++) {
			angular.forEach(con.workIndustry,function(item){
			if (industrylist[i]==item.type) {
				industrylist[i]=item.name
			}
		});
		}

		return industrylist //重要的是RETURN出去的值
	}
});
//市
app.filter('change_city',function(CITY) {
	return function(city) {
		angular.forEach(CITY, function(item){
			if (city==item.CityID) {
				city=item.CityName
			}
		})
		return city
	}
});
//县—区
app.filter("change_county",function(COUNTY) {
	return function(county) {
		angular.forEach(COUNTY,function(item) {
			if (county==item.CityID) {
				county=item.countyName
			}
		})
		return county
	}
});
//融资规模
app.filter("change_financing",function(con) {
	return function(financing) {
		angular.forEach(con.financing, function(item){
			if (financing==item.type) {
				financing=item.name
			}
		});
		return financing
	}
});
//认证状态
app.filter("change_approved",function(con) {
	return function(approved) {
		angular.forEach(con.approved, function(item){
			if (approved==item.type) {
				approved=item.name
			}
		});
		return approved
	}
});
//冻结状态
app.filter("change_freezed",function(con) {
	return function(freezed) {
		angular.forEach(con.freezed, function(item){
			if (freezed==item.type) {
				freezed=item.name
			}
		});
		return freezed
	}
});
//认证解除
/*app.filter("change_modal_approved",function() {
    return function(financing) {
        switch(financing){
            case 1:financing = "草稿";break;
            case 2:financing = "上线";break;
        }
        return financing;
    }
});*/
/*app.filter("change_modal_approved",function(modal) {
	return function(approved) {
		angular.forEach(modal.approved, function(item){
			if (approved==0) {
				approved=item.name
			}
			else{
				approved=item.name
			}

		});
	}
});*/