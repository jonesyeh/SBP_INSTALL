

CREATE ROLE [$(batch_role)]
GO

-- 授予dbo,comm, 結構描述底下權限
GRANT DELETE ON SCHEMA::[dbo] TO [$(batch_role)] --授予刪除權限
GRANT EXECUTE ON SCHEMA::[dbo] TO [$(batch_role)] --授予執行權限
GRANT INSERT ON SCHEMA::[dbo] TO [$(batch_role)] --授予新增權限
GRANT REFERENCES ON SCHEMA::[dbo] TO [$(batch_role)] --授予參考權限
GRANT SELECT ON SCHEMA::[dbo] TO [$(batch_role)] --授予查詢權限
GRANT UPDATE ON SCHEMA::[dbo] TO [$(batch_role)] --授予更新權限
GRANT VIEW DEFINITION ON SCHEMA::[dbo] TO [$(batch_role)] --授予檢視sql權限
GRANT ALTER ON SCHEMA::[dbo] TO [$(batch_role)] --授予ALTER權限
GRANT DELETE ON SCHEMA::[comm] TO [$(batch_role)] --授予刪除權限
GRANT EXECUTE ON SCHEMA::[comm] TO [$(batch_role)] --授予執行權限
GRANT INSERT ON SCHEMA::[comm] TO [$(batch_role)] --授予新增權限
GRANT REFERENCES ON SCHEMA::[comm] TO [$(batch_role)] --授予參考權限
GRANT SELECT ON SCHEMA::[comm] TO [$(batch_role)] --授予查詢權限
GRANT UPDATE ON SCHEMA::[comm] TO [$(batch_role)] --授予更新權限
GRANT VIEW DEFINITION ON SCHEMA::[comm] TO [$(batch_role)] --授予檢視sql權限
GRANT ALTER ON SCHEMA::[comm] TO [$(batch_role)] --授予ALTER權限
