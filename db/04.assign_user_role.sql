CREATE USER [$(batch_user)] FOR LOGIN [$(batch_user)]
go

ALTER ROLE [$(batch_role)] ADD MEMBER [$(batch_user)]
GO
