  use sbp
  go
  DECLARE @db varchar(20) --來源資料庫名稱
  declare @targetFolder varchar(max) --產生檔的資料夾
  declare @schema varchar(50) 
  declare @userid varchar(50) --來源資料庫登入帳號
  declare @password varchar(50) --來源資料庫登入密碼
  declare @serverip varchar(30) --伺服器 ip
  set @serverip='.'
  set @userid='sbp_batch_user'
  set @password='sbp_batch_user'
  set @db='SBP'
  set @schema='comm'
  set @targetFolder='c:\SBP\data\'  --須先建立該資料夾

  select 'bcp "'+ @db +'.' + s.name +'.'+ t.name + '" out "' + @targetFolder + t.name +'.dat" -n -q -U"'+@userid +'" -P"'+@password +'" -S"'+@serverip +'"' sql 
  from sys.tables  t
  inner join sys.schemas s
	on t.schema_id=s.schema_id
  where s.name=@schema
  and  t.name in ('tb_menu','tb_program','tb_permission','tb_code','tb_code_ext','tb_ssis_program_set','tb_conn_set','tb_file_path_set','tb_column_type_mapping','tb_ssis_sch_freq_type','tb_ssis_sch_freq_subday_type','tb_ssis_sch_freq_relative_interval')
  union all
  select 'bcp "'+ @db +'.' + s.name +'.'+ t.name + '" out "' + @targetFolder + t.name +'.dat" -n -q -U"'+@userid +'" -P"'+@password +'" -S"'+@serverip +'"' sql 
  from sys.tables  t
  inner join sys.schemas s
	on t.schema_id=s.schema_id
  where s.name=@schema
  and  t.name in ('tb_rolename_permission','tb_program_page','tb_program_permission')

   union all
  select 'bcp "'+ @db +'.' + s.name +'.'+ t.name + '" out "' + @targetFolder + t.name +'.dat" -n -q -U"'+@userid +'" -P"'+@password +'" -S"'+@serverip +'"' sql 
  from sys.tables  t
  inner join sys.schemas s
	on t.schema_id=s.schema_id
  where s.name=@schema
  and  t.name in ('tb_program_page_menu')

  