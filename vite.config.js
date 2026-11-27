export default {
  // config options
  base: 'setup-demo-2026',
  server: {
    port: 3300, // Меняем порт с 5173
    host: '0.0.0.0', // Делаем приложение доступным в сети
    open: true, // Автоматически открываем браузер
    https: false,
    hot: true, // Включаем горячую перезагрузку (HMR)
  },
};
