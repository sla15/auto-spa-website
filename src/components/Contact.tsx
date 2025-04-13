import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Check, CalendarIcon, Clock3 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
const bookingFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters."
  }),
  contact: z.string().min(5, {
    message: "Please provide a valid email or phone number."
  }),
  service: z.string({
    required_error: "Please select a service."
  }),
  date: z.date({
    required_error: "Please select a date for your appointment."
  }),
  time: z.string({
    required_error: "Please select a time for your appointment."
  }),
  message: z.string().optional()
});
type BookingFormValues = z.infer<typeof bookingFormSchema>;

// Available time slots
const timeSlots = ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"];
const Contact = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      contact: "",
      service: "",
      message: "",
      time: ""
    }
  });
  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    try {
      // Format date for better readability
      const formattedDate = format(data.date, 'PPP');

      // Send data to FormSubmit service (serverless email solution)
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('contact', data.contact);
      formData.append('service', data.service);
      formData.append('date', formattedDate);
      formData.append('time', data.time);
      formData.append('message', data.message || 'No additional details provided');

      // Using formsubmit.co service - change the email to your own
      const response = await fetch('https://formsubmit.co/ultimateautospa.com', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        toast({
          title: "Booking Request Sent",
          description: "We've received your booking request and will contact you soon.",
          duration: 5000
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Error",
        description: "There was a problem sending your request. Please try again later or contact us directly.",
        variant: "destructive",
        duration: 5000
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Contact <span className="text-autospa-yellow">Us</span></h2>
          <p className="text-xl text-autospa-gray max-w-2xl mx-auto">
            Have questions or ready to book an appointment? Reach out to us!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Booking form - now first */}
          <div className="animate-slide-in-right" style={{
          animationDelay: "0.2s"
        }}>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 text-center">Book Your Service</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField control={form.control} name="name" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <FormField control={form.control} name="contact" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Email or Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="email@example.com or 220 7898219" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <FormField control={form.control} name="service" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Service Required</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="basic-wash">Basic Pack - D300</SelectItem>
                            <SelectItem value="premium-wash">Premium - D1000</SelectItem>
                            <SelectItem value="full-spa">Full Spa - D2500</SelectItem>
                            <SelectItem value="ultimate">The Ultimate - D5000</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="date" render={({
                    field
                  }) => <FormItem className="flex flex-col">
                          <FormLabel>Appointment Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button variant="outline" className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                                  {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={date => date < new Date()} initialFocus className="p-3 pointer-events-auto" />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>} />

                    <FormField control={form.control} name="time" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Appointment Time</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select time">
                                  {field.value ? <div className="flex items-center">
                                      <Clock3 className="mr-2 h-4 w-4" />
                                      {field.value}
                                    </div> : <span>Select time</span>}
                                </SelectValue>
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {timeSlots.map(time => <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>)}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>} />
                  </div>
                  
                  <FormField control={form.control} name="message" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Additional Details</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us about your vehicle or any special requirements..." rows={4} className="resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <Button type="submit" className="w-full bg-autospa-yellow text-autospa-black hover:bg-autospa-black hover:text-white transition-colors duration-300" disabled={isSubmitting}>
                    {isSubmitting ? <>
                        <div className="h-5 w-5 border-t-2 border-b-2 border-current rounded-full animate-spin mr-2" />
                        Processing...
                      </> : <>
                        <Check className="mr-2 h-4 w-4" /> Book Now
                      </>}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          
          {/* Get In Touch - now second */}
          <div className="animate-slide-in-right" style={{
          animationDelay: "0.4s"
        }}>
            <div className="bg-autospa-black text-white p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6 text-autospa-yellow">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-autospa-yellow p-3 rounded-full mt-1">
                    <MapPin className="h-5 w-5 text-autospa-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Address</h4>
                    <p className="text-gray-300">Gambia, Costal road</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-autospa-yellow p-3 rounded-full mt-1">
                    <Phone className="h-5 w-5 text-autospa-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-gray-300">220 7898219</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-autospa-yellow p-3 rounded-full mt-1">
                    <Mail className="h-5 w-5 text-autospa-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-gray-300">ultimateautospa.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-autospa-yellow p-3 rounded-full mt-1">
                    <Clock className="h-5 w-5 text-autospa-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Business Hours</h4>
                    <p className="text-gray-300">Monday - Friday: 8am - 7pm<br />Saturday: 9am - 5pm<br />Sunday: 10am - 4pm</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-autospa-yellow/30">
                <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="bg-white/10 hover:bg-autospa-yellow hover:text-autospa-black p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-autospa-yellow hover:text-autospa-black p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="https://wa.me/2207898219" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-autospa-yellow hover:text-autospa-black p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.88 20.54c.844.512 1.04 1.88.37 2.78l-.37.44c-.777.93-2.178.84-2.845-.18l-1.535-2.31-3.66-5.52c-.34-.51-.16-1.24.37-1.54l.88-.54c.5-.31.73-.91.57-1.47L3.8 5.19c-.33-1.01.24-2.08 1.28-2.34l1.48-.36c1.08-.26 2.13.38 2.43 1.46l1.18 4c.21.7-.01 1.46-.55 1.91l-1.75 1.55c-.37.33-.46.88-.21 1.32l2.66 4.95 2.66 4.03zM20.54 3.46C18.22 1.14 15.24 0 12.04 0 8.85 0 5.87 1.14 3.54 3.46A11.66 11.66 0 000 12.04c0 2.48.77 4.87 2.22 6.88l-.74 2.66c-.24.88.22 1.8 1.1 2.04l2.9.8c.88.24 1.8-.22 2.04-1.1l.74-2.66C8.93 21.22 10.48 22 12.04 22c3.2 0 6.18-1.14 8.5-3.46A11.95 11.95 0 0024 12.04c0-3.2-1.14-6.18-3.46-8.58z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;