<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/css/manage_product_insert.css">
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="/js/common.js"></script>
<script src="/js/common_validation.js"></script>
<script src="/js/manage_product_insert.js"></script>
<title>Manage Product Insert</title>
</head>
<body>
  <form>
	<ul class="form-style-1">
	    <li><label>Full Name <span class="required">*</span></label><input type="text" name="field1" class="field-divided" placeholder="First" /> <input type="text" name="field2" class="field-divided" placeholder="Last" /></li>
	    <li>
	        <label>Email <span class="required">*</span></label>
	        <input type="email" name="field3" class="field-long" />
	    </li>
	    <li>
	        <label>Subject</label>
	        <select name="field4" class="field-select">
	        <option value="Advertise">Advertise</option>
	        <option value="Partnership">Partnership</option>
	        <option value="General Question">General</option>
	        </select>
	    </li>
	    <li>
	        <label>Your Message <span class="required">*</span></label>
	        <textarea name="field5" id="field5" class="field-long field-textarea"></textarea>
	    </li>
	    <li>
	        <input type="submit" value="Submit" />
	    </li>
	</ul>
  </form>
</body>
<script>

</script>
</html>