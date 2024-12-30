@echo off
:: Prompt the user for the name of the destination folder
set /p folderName=Enter the name of the destination folder:

:: Check if the folder already exists
if not exist "%~dp0%folderName%" (
    mkdir "%~dp0%folderName%"
    echo Folder "%folderName%" created successfully.
) else (
    echo Folder "%folderName%" already exists.
)

:: Traverse through all subfolders and copy files
for /r %%i in (*) do (
    echo Copying "%%i" to "%~dp0%folderName%\"...
    copy "%%i" "%~dp0%folderName%\" >nul
)

echo All files have been copied to "%folderName%".
pause
