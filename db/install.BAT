rem ���满�� install.bat [DbServer] [DbName] [sql_cmd_user] [sql_cmd_user_pwd] [batch_user] [batch_user_pwd]
rem ����d�� install.bat . ESOAF admin p@ssw0rd esoaf_sql_user p@ssw0rd
rem �ѼƳ]�w
set DbServer=%1
set DbName=%2
set sql_cmd_user=%3 
set sql_cmd_user_pwd=%4
set batch_user=%5
set batch_user_pwd=%6
set batch_role=batch_role

set asym_pwd=SystexP@ssw0rd
set conn_string=Data Source=%DbServer%;User ID=%batch_user%;Initial Catalog=%DbName%;Persist Security Info=false
set db_pwd=%batch_user_pwd%
set db_provider=SQLNCLI11.0
set db_version=2012


rem �إ�sbp���x ������ƪ��ε{��
sqlcmd -i "01.script.sql" -S %DbServer%  -d %DbName%  -U %sql_cmd_user% -P %sql_cmd_user_pwd%
pause

rem �إ߸�Ʈw����
sqlcmd -i "03.create_db_role.sql"  -S %DbServer%  -d %DbName% -U %sql_cmd_user% -P %sql_cmd_user_pwd%
pause

rem �����n�J�ϥΪ̨���
 sqlcmd -i "04.assign_user_role.sql"   -S %DbServer%  -d %DbName% -U %sql_cmd_user% -P %sql_cmd_user_pwd%
pause

rem �إ߫D��٦����_�ñ©��v����batch_role
 sqlcmd -i "05.create_asym_key.sql"   -S %DbServer%  -d %DbName% -U %sql_cmd_user% -P %sql_cmd_user_pwd%
pause

rem �פJ���x���
 call 06.import_data.bat %DbServer% %DbName%  %sql_cmd_user% %sql_cmd_user_pwd% 
pause
rem ��s��Ʈw�s�u��T
sqlcmd -i "07.update_conn_string.sql"  -S %DbServer%  -d %DbName% -U %sql_cmd_user% -P %sql_cmd_user_pwd%
pause 
rem �R�������n����ơA�öפJ��l���
sqlcmd -i "08.init_data.sql"  -S %DbServer%  -d %DbName% -U %sql_cmd_user% -P %sql_cmd_user_pwd%
pause 
rem �Ұ� MSDTC
net start MSDTC
pause