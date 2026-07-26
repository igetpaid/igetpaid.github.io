@echo off
setlocal

cd /d "%~dp0"

echo ========================================
echo   igetpaid.ru v2 - Local Dev Server
echo ========================================
echo.

where npm >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Node.js npm not found.
    pause
    exit /b 1
)

echo [1/2] Installing dependencies...
call npm install --silent
if errorlevel 1 (
    echo [ERROR] npm install failed.
    pause
    exit /b 1
)

echo.
echo [2/2] Starting dev server...
echo.
echo ========================================
echo   Server: http://localhost:5173
echo   Opening browser...
echo   Press Ctrl+C to stop
echo ========================================
echo.

start "" "http://localhost:5173"

call npx vite --host
