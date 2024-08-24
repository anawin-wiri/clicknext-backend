import { format } from 'date-fns'; // ใช้ date-fns หรือไลบรารีอื่นๆ สำหรับการจัดการวันที่
import { th } from 'date-fns/locale'; // Locale ภาษาไทย

function formatDateToThai(date: Date): string {
  return format(date, 'dd MMMM yyyy', { locale: th });
}

export default {
  formatDateToThai
}
